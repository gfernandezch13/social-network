import { useState } from 'react';
import useTweets from '../hooks/useTweets';

const initialState = {
  tweet: '',
  author: '',
};

const TweetForm = () => {
  const [formState, setFormState] = useState(initialState);

  const { addTweet } = useTweets();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet(formState);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          placeholder="escribe tu tweet"
          name="tweet"
          autoComplete="off"
          onChange={handleChange}
          value={formState.tweet}
        />

        <div>
          <input
            placeholder="Author"
            name="author"
            autoComplete="off"
            onChange={handleChange}
            value={formState.author}
          />
          <button type="submit">Enviar tweet</button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
