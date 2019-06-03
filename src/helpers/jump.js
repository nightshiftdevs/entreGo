import jump from 'jump.js';

export function addJump(fromClass, toClass) {
  classSelect = document.querySelector(`.${fromClass}`);
  classSelect.addEventListener('click', () => {
    jump(`.${toClass}`);
  });
}
