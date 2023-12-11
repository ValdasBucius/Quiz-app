function NextButton({ dispatch, children, type }) {
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: type })}>
      {children}
    </button>
  );
}

export default NextButton;
