import { PartialDeep } from 'type-fest'
import { Status } from '../enums'
import { MnWoInterface } from '../mnWo'

/**
 * Interface untuk argumen metode createMnWo
 *
 * @property {PartialDeep<MnWoInterface>} - properti yang ada pada MnWoDto
 */
export interface CreateMnWoArgument extends PartialDeep<MnWoInterface> {}

/**
 * Interface untuk argumen metode updateMnWo
 *
 * @property {PartialDeep<MnWoInterface>} - properti yang ada pada MnWoDto
 */
export interface UpdateMnWoArgument extends CreateMnWoArgument {}

/**
 * Interface untuk argumen metode infoWo
 *
 * @property {number} year - tahun yang ingin diambil
 * @property {number} month - bulan yang ingin diambil
 * @property {string} [locNm] - nama lokasi yang ingin diambil
 * @property {string} [prio] - prioritas yang ingin diambil
 */
export interface InfoWoArgument {
  year: number
  month: number
  locNm?: string
  prio?: string
}

/**
 * Interface untuk argumen metode findAllMnWo
 *
 * @property {number} [page] - nomor halaman yang ingin diambil
 * @property {number} [perPage] - jumlah data per halaman yang ingin diambil
 * @property {string} [filter] - filter yang ingin diaplikasikan
 * @property {string} [globalFilter] - filter global yang ingin diaplikasikan
 * @property {number} [month] - bulan yang ingin diambil
 * @property {number} [year] - tahun yang ingin diambil
 * @property {string} [location] - nama lokasi yang ingin diambil
 * @property {Status} [woClose] - status work order yang ingin diambil
 * @property {string} [priority] - prioritas yang ingin diambil
 */
export interface FindAllMnWoArgument {
  page?: number
  perPage?: number
  filter?: string
  globalFilter?: string
  month?: number
  year?: number
  location?: string
  woClose?: Status
  priority?: string
}

/**
 * Interface untuk argumen metode findWo
 *
 * @property {string} woId - id work order yang ingin diambil
 */
export interface FindWoArgument {
  woId: string
}

/**
 * Interface untuk argumen metode findAllMnWoByMcCd
 *
 * @property {string} mcCd - kode mesin yang ingin diambil
 * @property {string} comId - id company yang ingin diambil
 * @property {Status} [woClose] - status work order yang ingin diambil
 * @property {number} [page] - nomor halaman yang ingin diambil
 * @property {number} [perPage] - jumlah data per halaman yang ingin diambil
 */
export interface FindAllMnWoByMcCdArgument {
  mcCd: string
  comId: string
  woClose?: Status
  page?: number
  perPage?: number
}

/**
 * Interface untuk argumen metode findFailure
 *
 * @property {string} mcCd - kode mesin yang ingin diambil
 * @property {string} comId - id company yang ingin diambil
 */
export interface FindFailureArgument {
  mcCd: string
  comId: string
}

/**
 * Interface untuk argumen metode findFailureHistorian
 *
 * @property {string} mcCd - kode mesin yang ingin diambil
 * @property {string} comId - id company yang ingin diambil
 */
export interface FindFailureHistorianArgument {
  mcCd: string
  comId: string
}
