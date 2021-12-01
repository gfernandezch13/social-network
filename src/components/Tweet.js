import { ReactComponent as IconHeart } from '../assets/icons/iconHeart.svg';

const Tweet = () => {
  return (
    <div className="tweetWrapper">
        <div>
          <img src="#" alt="avatar" />
        </div>
        <div>
          <div>
            <span>USERNAME </span> - <span>5 jun.</span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium corrupti
              quasi necessitatibus velit id laboriosam minus aliquid magni cumque earum qui sapiente
              atque, repellat quos nobis vero beatae tempore.
            </p>
            <div>
              <IconHeart className="icon" /> 5
            </div>
          </div>
        </div>
        <div>
          <img src="#" alt="borrar" />
        </div>
    </div>
  );
};

export default Tweet;
