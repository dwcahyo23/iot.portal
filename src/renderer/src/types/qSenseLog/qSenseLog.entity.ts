import { EntityMstMchInterface } from "../mstMch/mstMch.entity";

export interface EntityQSenseLogInterface {
  id: number;
  time: Date;
  mcCd: string;
  mstMch?: EntityMstMchInterface;
  run_stop: number;
  counter: number;
  good_counter: number;
  ng_counter: number;
  avaibility: number;
  performance: number;
  quality: number;
  reason: number;
  reason_time: number;
  actual_speed: number;
  load_1: number | null;
  load_2: number | null;
  load_3: number | null;
  load_4: number | null;
  load_5: number | null;
  load_6: number | null;
}
