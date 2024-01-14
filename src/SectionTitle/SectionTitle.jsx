import css from './SectionTitle.module.css';

export const SectionTitle = ({ children }) => {
  return <h2 className={css.title}>{children}</h2>;
};
