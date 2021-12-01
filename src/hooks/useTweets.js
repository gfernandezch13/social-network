import { addDoc } from 'firebase/firestore';
import { getRefCollection } from '../firebase/config';

const useTweets = () => {
  const addTweet = async (data) => {
    try {
      const docRef = await addDoc(getRefCollection('tweet'), data);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return { addTweet };
};

export default useTweets;
