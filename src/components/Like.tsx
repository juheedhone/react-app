import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <AiFillHeart
      fill={liked === true ? "red" : "white"}
      strokeWidth={50}
      stroke="black"
      onClick={() => {
        // setLiked(liked === true ? false : true);
        setLiked(!liked);
        onClick();
      }}
    />
  );
};

export default Like;
