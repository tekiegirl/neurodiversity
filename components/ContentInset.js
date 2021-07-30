export default function ContentInset({ size, children }) {
  const classes = {
    wide: "max-w-4xl w-full",
    normal: "max-w-3xl w-full",
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className={classes[size]}>{children}</div>
    </div>
  );
}
