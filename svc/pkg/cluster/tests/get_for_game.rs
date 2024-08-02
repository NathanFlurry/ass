use chirp_workflow::prelude::*;
use serde_json::json;

#[workflow_test]
async fn get_for_game(ctx: TestCtx) {
	let cluster_id = Uuid::new_v4();
	let game_id = Uuid::new_v4();

	let mut sub = ctx
		.subscribe::<cluster::workflows::cluster::CreateComplete>(&json!({
			"cluster_id": cluster_id,
		}))
		.await
		.unwrap();

	ctx.dispatch_tagged_workflow(
		&json!({
			"cluster_id": cluster_id,
		}),
		cluster::workflows::cluster::Input {
			cluster_id,
			name_id: util::faker::ident(),
			owner_team_id: None,
		},
	)
	.await
	.unwrap();

	sub.next().await.unwrap();

	ctx.tagged_signal(
		&json!({
			"cluster_id": cluster_id,
		}),
		cluster::workflows::cluster::GameLink { game_id },
	)
	.await
	.unwrap();

	let games_res = ctx
		.op(cluster::ops::get_for_game::Input {
			game_ids: vec![game_id],
		})
		.await
		.unwrap();
	let game = games_res.games.first().unwrap();

	assert_eq!(cluster_id, game.cluster_id);
}
