export const detectBtnStyle = color => {
  switch (color) {
    case '#37a000':
      return 'dark-green';
    case '#0077b5':
      return 'indigo';
    case '#24292e':
      return 'elegant';
    case '#00aff0':
      return 'info';
    case '#410093':
        return 'pink';
    default:
        return '';
  }
};