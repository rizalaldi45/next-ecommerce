import Image from "next/image";

type RatingType = {
  count: number;
};

const Rating = ({ count }: RatingType): any => {
  const renderStar = () => {
    switch (count) {
      case 5:
        return (
          <>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Image
                key={i}
                className="h-[12px]"
                src="/images/star.png"
                alt="star-filled"
                width={12}
                height={12}
              />
            ))}
          </>
        );
      case 4:
        return (
          <>
            {[1, 2, 3, 4].map((_, i) => (
              <Image
                key={i}
                className="h-[12px]"
                src="/images/star.png"
                alt="star-filled"
                width={12}
                height={12}
              />
            ))}
          </>
        );
      case 3:
        return (
          <>
            {[1, 2, 3].map((_, i) => (
              <Image
                key={i}
                className="h-[12px]"
                src="/images/star.png"
                alt="star-filled"
                width={12}
                height={12}
              />
            ))}
          </>
        );
      case 2:
        return (
          <>
            {[1, 2].map((_, i) => (
              <Image
                key={i}
                className="h-[12px]"
                src="/images/star.png"
                alt="star-filled"
                width={12}
                height={12}
              />
            ))}
          </>
        );
      default:
        return (
          <Image
            className="h-[12px]"
            src="/images/star.png"
            alt="star-filled"
            width={12}
            height={12}
          />
        );
    }
  };

  return <div className="flex gap-x-[6px]">{renderStar()}</div>;
};

export default Rating;
