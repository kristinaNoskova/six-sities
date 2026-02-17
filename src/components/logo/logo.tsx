type LogoProps = {
  width: number;
  height: number;
  href?: string;
  className: string;
  bemBlock: string;
};

function Logo({ width, height, href, className, bemBlock }: LogoProps) {
  return (
    <a className={className} href={href ? href : ''}>
      <img
        className={`${bemBlock}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </a>
  );
}

export default Logo;
