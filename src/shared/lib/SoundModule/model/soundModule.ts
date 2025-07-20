// shared/lib/soundModule.ts

type TSounds = {
  [key: string]: HTMLAudioElement;
};

class SoundModuleClass {
  private sounds: TSounds = {};

  init(sounds: { [key: string]: string }) {
    Object.entries(sounds).forEach(([key, src]) => {
      this.sounds[key] = new Audio(src);
    });
  }

  play(key: string) {
    const sound = this.sounds[key];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  }
}

export const SoundModule = new SoundModuleClass();
