const Button = ({
  textColor,
  color,
  title,
  h_textColor,
  h_color,
  padding = null,
}) => {
  return (
    <button
      className={`transition font-font_poppins inline-block ${
        padding ? padding : "px-4 py-[0.625em]"
      }  font-medium rounded-xl ${color} ${textColor} ${h_textColor} ${h_color} text-base border border-primary-500`}
    >
      {title}
    </button>
  );
};

export default Button;
