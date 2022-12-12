import SimpleImageSlider from 'react-simple-image-slider';

interface Props {
  images: Array<string>;
  size: number;
}

// interface Img {
//   url: string;
// }

export const SliderWrapper = ({ images, size }: Props) => {
  //   const imageObjs: Array<Img> = images.map((each) => {
  //     return { url: each };
  //   });

  return (
    <SimpleImageSlider
      style={{
        backgroundColor: 'white',
        cursor: 'default',
        // borderRadius: '10px',
        // overflow: 'hidden',
      }}
      width={size}
      height={size}
      images={images}
      showBullets={false}
      showNavs={images.length <= 1 ? false : true}
      navSize={15}
      navStyle={2}
      navMargin={6}
    />
  );
};
