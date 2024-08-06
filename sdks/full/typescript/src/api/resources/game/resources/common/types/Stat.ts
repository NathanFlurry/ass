/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Rivet from "../../../../../index";

/**
 * A game statistic.
 */
export interface Stat {
    config: Rivet.game.StatConfig;
    /** A single overall value of the given statistic. */
    overallValue: number;
}
