const PORTFOLIO_SCROLL_KEY = "softwarePortfolioProjectsScrollY";
const PORTFOLIO_RESTORE_KEY = "softwarePortfolioProjectsRestore";

export const savePortfolioScrollPosition = () => {
  window.sessionStorage.setItem(PORTFOLIO_SCROLL_KEY, String(window.scrollY));
};

export const markPortfolioScrollForRestore = () => {
  window.sessionStorage.setItem(PORTFOLIO_RESTORE_KEY, "1");
};

export const consumePortfolioScrollPosition = () => {
  const shouldRestore = window.sessionStorage.getItem(PORTFOLIO_RESTORE_KEY);

  if (shouldRestore !== "1") {
    return null;
  }

  window.sessionStorage.removeItem(PORTFOLIO_RESTORE_KEY);

  const savedScroll = window.sessionStorage.getItem(PORTFOLIO_SCROLL_KEY);
  window.sessionStorage.removeItem(PORTFOLIO_SCROLL_KEY);

  const parsed = Number(savedScroll);
  return Number.isFinite(parsed) ? parsed : null;
};
