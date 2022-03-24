import { KEY } from '@config/constants';

export function useNavigation(setSelectState, selectState, pageSize) {
  const { activeOption, options, selected } = selectState;
  const lastIndex = options.length - 1;

  function getActiveIndex() {
    const searchedId = activeOption ? activeOption : selected.id;
    return options.findIndex(({ props: { id } }) => searchedId === id);
  }

  function next(currentIndex) {
    return Math.min(lastIndex, currentIndex + 1);
  }

  function previous(currentIndex) {
    return Math.max(-1, currentIndex - 1);
  }

  function first() {
    return 0;
  }

  function last() {
    return lastIndex;
  }

  function nextPage(currentIndex) {
    return Math.min(lastIndex, currentIndex + pageSize);
  }

  function previousPage(currentIndex) {
    return Math.max(-1, currentIndex - pageSize);
  }

  return {
    navigateActions: {
      [KEY.ARROW_DOWN]: next,
      [KEY.ARROW_UP]: previous,
      [KEY.HOME]: first,
      [KEY.END]: last,
      [KEY.PAGE_DOWN]: nextPage,
      [KEY.PAGE_UP]: previousPage,
    },
    activeIndex: getActiveIndex(),
    setActiveIndex(key) {
      const currentActiveIndex = getActiveIndex();

      this.activeIndex = this.navigateActions[key](currentActiveIndex);

      return this;
    },

    navigate() {
      const {
        props: { id },
      } = options[this.activeIndex === -1 ? 0 : this.activeIndex];

      setSelectState({ ...selectState, activeOption: id });
    },
  };
}
