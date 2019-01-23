import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  //automatically reruns when props change
  //takes props and gives back state
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo[`@size`] === "pn");
    }

    return { photos: photos };
  }

  handleIndexClick = e => {
    this.setState({
      //this is coercing the type of "e" to be a number
      active: +e.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              data-index={index}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
