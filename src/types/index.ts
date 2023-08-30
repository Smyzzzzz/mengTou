import { type NONE } from '@/utils/constant'

export type None = typeof NONE

import {
  // type BeardShape,
  // type ClothesShape,
  // type EarringsShape,
  // type EarShape,
  // type EyebrowsShape,
  // type EyesShape,
  // type FaceShape,
  // type Gender,
  // type GlassesShape,
  // type MouthShape,
  // type NoseShape,
  // type TopsShape,
  type WrapperShape
} from '../enums'

// 规定背景颜色
export interface AvatarOption {
  // gender?: Gender

  wrapperShape?: `${WrapperShape}`

  background: {
    color: string
  }

  // widgets: Partial<AvatarWidgets>
}

export interface AvatarSettings {
  // gender: [Gender, Gender]

  wrapperShape: WrapperShape[]
  // faceShape: FaceShape[]
  // topsShape: TopsShape[]
  // earShape: EarShape[]
  // earringsShape: EarringsShape[]
  // eyebrowsShape: EyebrowsShape[]
  // eyesShape: EyesShape[]
  // noseShape: NoseShape[]
  // mouthShape: MouthShape[]
  // beardShape: BeardShape[]
  // glassesShape: GlassesShape[]
  // clothesShape: ClothesShape[]

  commonColors: string[]
  skinColors: string[]
  backgroundColor: string[]
}
