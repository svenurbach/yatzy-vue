import { ref } from "vue";

export function useDice() {
  const face = ref(0)
  const isHold = ref(false)

  const roll = () => {
    if (!isHold.value) {
      face.value = Math.floor(Math.random() * 6) + 1;
    } else {
      console.log("Dice is on hold. Can't roll!, Value:", face.value);
    }
  }

  const hold = () => {
    isHold.value = !isHold.value
  }

  return {
    roll,
    hold,
    face,
    isHold
  }
}
