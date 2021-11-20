const StringReverse = (props) => {
  return (
    <>
      Enter string to be reversed
      <input
        type="text"
        name="reverseName"
        onChange={(event) => props.reverseGivenString(event)}
      />
      <div>{props.reverseString}</div>
    </>
  );
};
export default StringReverse;
