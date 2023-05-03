import { useEffect, useRef } from 'react';

const UseClickOutside = (props) => {
  const ref = useRef(null);
  const onClickOutside = props.onClickOutside;
  const children = props.children;
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside && onClickOutside();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);
  if (!children) {
    return null;
  }
  return <div ref={ref}>{children}</div>;
};

export default UseClickOutside;