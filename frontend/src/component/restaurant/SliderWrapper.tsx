import SimpleImageSlider from 'react-simple-image-slider';

interface Props {
  images: Array<string>;
}

// interface Img {
//   url: string;
// }

export const SliderWrapper = ({ images }: Props) => {
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
      width={100}
      height={100}
      images={images}
      showBullets={false}
      showNavs={images.length <= 1 ? false : true}
      navSize={15}
      navStyle={2}
      navMargin={6}
    />
  );
};
