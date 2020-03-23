import React, { Fragment, Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import compose from "recompose/compose";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  carousel: {
    width: "100%",
    height: "402px",
    [theme.breakpoints.down("md")]: {
      height: "auto"
    }
  },
  carouselInner: theme.innerBlock,
  image1div: {
    display: "block",
    width: "100%",
    height: "auto",
    position: "relative",
    overflow: "hidden",
    padding: "42% 0 0 0" /* 34.37% = 100 / (w / h) = 100 / (640 / 220) */
  },
  image1: {
    display: "block",
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  hcsstest: {
    position: "absolute",
    color: "#e2dede",
    fontFamily: theme.fontFamily,
    fontWeight: 700,
    textShadow: "black 0.1em 0.1em 0.2em",
    fontSize: "1.5rem",
    zIndex: 2
  },
  carouselItem1: {
    left: "1.5rem",
    bottom: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      left: "1rem",
      bottom: "0.2rem"
    }
  },
  carouselItem2: {
    left: "1.5rem",
    bottom: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      left: "1rem",
      bottom: "0.2rem"
    }
  },
  carouselItem3: {
    left: "1.5rem",
    bottom: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
      left: "1rem",
      bottom: "0.2rem"
    }
  }
});

let carouselList = [
  `いつでもお客様に、「満足」・「安心」を\n感じていただけるよう、常に「真摯」・「誠実」な\n態度で業務に取り組むとともに、\nこれらを実現する社員の育成に尽力します。`,

  "「感謝」の気持ちを第一に、常に「技術力」・「生産性」\n 向上に努め、新しいALRIGHT（価値）を創造します。",
  `＜我々にできること＞\nお客様に安心感を与えること\n社員の成長に心掛けていくこと\n企業市民として、社会に貢献すること`
];

class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    item: 0,
    currentIndex: 0,
    galleryItems: this.galleryItems()
  };

  slideTo = i => this.setState({ currentIndex: i });

  galleryItems() {
    const { classes } = this.props;
    return [11, 6, 12].map((v, index) => (
      <div className={classes.image1div}>
        <pre
          className={`${classes.hcsstest} ${
            classes["carouselItem" + (index + 1)]
          }`}
        >
          {carouselList[index]}
        </pre>
        <img
          alt=""
          src={`/images/Carousel${v}.jpg`}
          className={classes.image1}
        />
      </div>
    ));
  }

  onSlideChanged = e => {
    // this.state.galleryItems[e.item].slideTo(e.item)
    // this.setState({ currentIndex: e.item })
  };

  render() {
    const { classes } = this.props;
    const { galleryItems, currentIndex } = this.state;

    return (
      <div className="carousel slide" data-ride="carousel">
        <div className={`carousel-inner ${classes.carouselInner}`}>
          <div
            className={["carousel-item", "active", classes.carousel].join(" ")}
          >
            <AliceCarousel
              autoPlayInterval={10000}
              slideToIndex={currentIndex}
              autoPlay={true}
              onSlideChanged={this.onSlideChanged}
              buttonsDisabled={true}
              stopAutoPlayOnHover={false}
              items={galleryItems}
              dotsDisabled={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(styles))(Carousel);
