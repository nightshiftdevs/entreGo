import jump from 'jump.js';

export function addJump(fromClass, toClass, offsetJump) {
  const classSelect = document.querySelector(`.${fromClass}`);
  classSelect.addEventListener('click', () => {
    jump(`.${toClass}`,{
      offset: offsetJump
    });
  });
}
