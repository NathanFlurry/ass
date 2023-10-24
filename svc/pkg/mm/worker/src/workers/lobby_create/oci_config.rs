use chirp_worker::prelude::*;
use serde_json::json;

use super::nomad_job::template_env_var;

/// Generates base config.json for an OCI bundle.
pub fn config(resources: &nomad_client::models::Resources, env: Vec<String>) -> serde_json::Value {
	// This is a modified version of the default config.json generated by containerd.
	//
	// Some values will be overridden at runtime by the values in the OCI bundle's config.json.
	//
	// Default Docker spec: https://github.com/moby/moby/blob/777e9f271095685543f30df0ff7a12397676f938/oci/defaults.go#L49
	//
	// Generate config.json with containerd:
	// ctr run --rm -t --seccomp docker.io/library/debian:latest debian-container-id /bin/bash
	// cat /run/containerd/io.containerd.runtime.v2.task/default/debian-container-id/config.json | jq
	json!({
		"ociVersion": "1.0.2-dev",
		"process": {
			// user, args, and cwd will be injected at runtime

			// Will be merged with the OCI bundle's env
			//
			// These will take priority over the OCI bundle's env
			"env": env,

			"terminal": false,
			"capabilities": {
				"bounding": capabilities(),
				"effective": capabilities(),
				"permitted": capabilities()
			},
			"rlimits": [
				{
					"type": "RLIMIT_NOFILE",
					"hard": 1024,
					"soft": 1024
				}
			],
			"noNewPrivileges": true

			// TODO: oomScoreAdj
			// TODO: scheduler
			// TODO: iopriority
			// TODO: rlimit?
		},
		"root": {
			"path": "rootfs",
			"readonly": true
		},
		"mounts": mounts(),
		"linux": {
			"resources": {
				"devices": linux_resources_devices(),
				"cpu": {
					"shares": resources.CPU,
					// Use the env var for the CPU since Nomad handles assigning CPUs to each task
					"cpus": resources.cores.map(|_| template_env_var("NOMAD_CPU_CORES")),
				},
				// Docker: https://github.com/moby/moby/blob/777e9f271095685543f30df0ff7a12397676f938/daemon/daemon_unix.go#L75
				"memory": {
					"reservation": resources.memory_mb.map(|x| x * 1_000_000),
					"limit": resources.memory_max_mb.map(|x| x * 1_000_000)
				},

				// TODO: network
				// TODO: pids
				// TODO: hugepageLimits
				// TODO: blockIO
			},
			// "cgroupsPath": "/default/debian-container-id",
			"namespaces": [
				{
				"type": "pid"
				},
				{
				"type": "ipc"
				},
				{
				"type": "uts"
				},
				{
				"type": "mount"
				}
			],
			"maskedPaths": [
				"/proc/acpi",
				"/proc/asound",
				"/proc/kcore",
				"/proc/keys",
				"/proc/latency_stats",
				"/proc/timer_list",
				"/proc/timer_stats",
				"/proc/sched_debug",
				"/sys/firmware",
				"/proc/scsi"
			],
			"readonlyPaths": [
				"/proc/bus",
				"/proc/fs",
				"/proc/irq",
				"/proc/sys",
				"/proc/sysrq-trigger"
			],
			"seccomp": super::seccomp::seccomp()
		}
	})
}

// Default Docker capabilities: https://github.com/moby/moby/blob/777e9f271095685543f30df0ff7a12397676f938/oci/caps/defaults.go#L4
fn capabilities() -> Vec<&'static str> {
	vec![
		"CAP_CHOWN",
		"CAP_DAC_OVERRIDE",
		"CAP_FSETID",
		"CAP_FOWNER",
		"CAP_MKNOD",
		"CAP_NET_RAW",
		"CAP_SETGID",
		"CAP_SETUID",
		"CAP_SETFCAP",
		"CAP_SETPCAP",
		"CAP_NET_BIND_SERVICE",
		"CAP_SYS_CHROOT",
		"CAP_KILL",
		"CAP_AUDIT_WRITE",
	]
}

fn mounts() -> serde_json::Value {
	json!([
		{
		"destination": "/proc",
		"type": "proc",
		"source": "proc",
		"options": [
			"nosuid",
			"noexec",
			"nodev"
		]
		},
		{
		"destination": "/dev",
		"type": "tmpfs",
		"source": "tmpfs",
		"options": [
			"nosuid",
			"strictatime",
			"mode=755",
			"size=65536k"
		]
		},
		{
		"destination": "/dev/pts",
		"type": "devpts",
		"source": "devpts",
		"options": [
			"nosuid",
			"noexec",
			"newinstance",
			"ptmxmode=0666",
			"mode=0620",
			"gid=5"
		]
		},
		{
		"destination": "/dev/shm",
		"type": "tmpfs",
		"source": "shm",
		"options": [
			"nosuid",
			"noexec",
			"nodev",
			"mode=1777",
			"size=65536k"
		]
		},
		{
		"destination": "/dev/mqueue",
		"type": "mqueue",
		"source": "mqueue",
		"options": [
			"nosuid",
			"noexec",
			"nodev"
		]
		},
		{
		"destination": "/sys",
		"type": "sysfs",
		"source": "sysfs",
		"options": [
			"nosuid",
			"noexec",
			"nodev",
			"ro"
		]
		},
		{
		"destination": "/run",
		"type": "tmpfs",
		"source": "tmpfs",
		"options": [
			"nosuid",
			"strictatime",
			"mode=755",
			"size=65536k"
		]
		}
	])
}

fn linux_resources_devices() -> serde_json::Value {
	// Devices implicitly contains the following devices:
	// null, zero, full, random, urandom, tty, console, and ptmx.
	// ptmx is a bind mount or symlink of the container's ptmx.
	// See also: https://github.com/opencontainers/runtime-spec/blob/master/config-linux.md#default-devices
	json!([
		{
		"allow": false,
		"access": "rwm"
		},
		{
		"allow": true,
		"type": "c",
		"major": 1,
		"minor": 3,
		"access": "rwm"
		},
		{
		"allow": true,
		"type": "c",
		"major": 1,
		"minor": 8,
		"access": "rwm"
		},
		{
		"allow": true,
		"type": "c",
		"major": 1,
		"minor": 7,
		"access": "rwm"
		},
		{
		"allow": true,
		"type": "c",
		"major": 5,
		"minor": 0,
		"access": "rwm"
		},
		{
		"allow": true,
		"type": "c",
		"major": 1,
		"minor": 5,
		"access": "rwm"
		},
		{
		"allow": true,
		"type": "c",
		"major": 1,
		"minor": 9,
		"access": "rwm"
		},
		{
		"allow": true,
		"type": "c",
		"major": 5,
		"minor": 1,
		"access": "rwm"
		},
		{
		"allow": true,
		"type": "c",
		"major": 136,
		"access": "rwm"
		},
		{
		"allow": true,
		"type": "c",
		"major": 5,
		"minor": 2,
		"access": "rwm"
		}
	])
}
