use chirp_worker::prelude::*;

use ::load_test_watch_requests::run_from_env;

#[tokio::test(flavor = "multi_thread")]
async fn basic() {
	if !util::feature::dns() {
		return;
	}

	tracing_subscriber::fmt()
		.json()
		.with_max_level(tracing::Level::INFO)
		.with_span_events(tracing_subscriber::fmt::format::FmtSpan::NONE)
		.init();

	// TODO:
	run_from_env(util::timestamp::now()).await.unwrap();
}
