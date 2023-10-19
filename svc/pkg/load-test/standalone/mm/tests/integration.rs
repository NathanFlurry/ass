use chirp_worker::prelude::*;

use ::load_test_mm::run_from_env;

#[tokio::test(flavor = "multi_thread")]
async fn basic() {
	tracing_subscriber::fmt()
		.json()
		.with_max_level(tracing::Level::INFO)
		.with_span_events(tracing_subscriber::fmt::format::FmtSpan::NONE)
		.init();

	if !util::feature::job_run() {
		return;
	}

	run_from_env(util::timestamp::now()).await.unwrap();
}
