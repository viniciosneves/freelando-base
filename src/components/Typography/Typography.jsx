import { css } from '@emotion/css';

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  body2: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
};

const styles = {
  h1: css`
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
  `,
  h2: css`
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
  `,
  h3: css`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  `,
  body1: css`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  `,
  body2: css`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  `,
  subtitle1: css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  `,
  subtitle2: css`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  `,
};

export const Typography = ({ variant, children }) => {
  const Component = variantMapping[variant];
  return (
    <Component css={styles[variant]}>
      {children}
    </Component>
  );
};
