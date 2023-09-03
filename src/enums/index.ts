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
  Ear = 'ear',
  // 后面加的
  Tops = 'tops',

  Earrings = 'earrings',
  Eyebrows = 'eyebrows',
  Eyes = 'eyes',
  Nose = 'nose',
  Glasses = 'glasses',
  Mouth = 'mouth',
  Beard = 'beard',
  Clothes = 'clothes'
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

// ////////////////////////

export const enum ActionType {
  Undo = 'undo',
  Redo = 'redo',
  Flip = 'flip',
  Code = 'code'
}
export const enum Gender {
  Male = 'male',
  Female = 'female',
  NotSet = 'notSet'
}

export enum TopsShape {
  Fonze = 'fonze',
  Funny = 'funny',
  Clean = 'clean',
  Punk = 'punk',
  Danny = 'danny',
  Wave = 'wave',
  Turban = 'turban',
  Pixie = 'pixie',
  Beanie = 'beanie'
}

export enum EarringsShape {
  Hoop = 'hoop',
  Stud = 'stud',
  Star = 'star',
  Hudie = 'hudie',
  None = 'none'
}

export enum EyebrowsShape {
  Up = 'up',
  Down = 'down',
  Eyelashesup = 'eyelashesup',
  Eyelashesdown = 'eyelashesdown'
}

export enum EyesShape {
  Ellipse = 'ellipse',
  Smiling = 'smiling',
  Eyeshadow = 'eyeshadow',
  Round = 'round'
}

export enum NoseShape {
  Curve = 'curve',
  Round = 'round',
  Pointed = 'pointed'
}

export enum MouthShape {
  Frown = 'frown',
  Laughing = 'laughing',
  Nervous = 'nervous',
  Pucker = 'pucker',
  Sad = 'sad',
  Smile = 'smile',
  Smirk = 'smirk',
  Surprised = 'surprised'
}

export enum BeardShape {
  Scruff = 'scruff',
  None = 'none'
}

export enum GlassesShape {
  Round = 'round',
  Square = 'square',
  None = 'none'
}

export enum ClothesShape {
  Crew = 'crew',
  Collared = 'collared',
  Open = 'open'
}

export type WidgetShape =
  | FaceShape
  | TopsShape
  | EarShape
  | EarringsShape
  | EyebrowsShape
  | EyesShape
  | NoseShape
  | MouthShape
  | BeardShape
  | GlassesShape
  | ClothesShape
