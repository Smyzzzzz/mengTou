// 头像形状
export enum WrapperShape {
  Circle = 'circle',
  Square = 'square',
  Squircle = 'squircle'
}
// 语言
export const enum Locale {
  ZH = 'zh',
  EN = 'en'
}

// 小零件

export enum WidgetType {
  Face = 'face',
  Ear = 'ear'
}

// 脸型

export enum FaceShape {
  Base = 'base'
}

// 耳朵

export enum EarShape {
  Attached = 'attached',
  Detached = 'detached'
}

export type WidgetShape =
  | FaceShape
  // | TopsShape
  | EarShape
// | EarringsShape
// | EyebrowsShape
// | EyesShape
// | NoseShape
// | MouthShape
// | BeardShape
// | GlassesShape
// | ClothesShape
