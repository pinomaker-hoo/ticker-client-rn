import ImgToBase64 from 'react-native-image-base64';

export const imgToBase64Code = async (url: string) => {
  return await ImgToBase64.getBase64String(url);
};
