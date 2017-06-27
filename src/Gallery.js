import React from 'react'
import PictureComponent from '../src/PictureComponent'
import GalleryNavbar from '../src/GalleryNavbar'
import InfiniteScroll from '../node_modules/react-infinite-scroller/dist/InfiniteScroll'
import qwest from 'qwest'


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        };
    }

    loadItems(page) {
        let self = this;

        let url = "http://localhost:8000/api/images/";
        if (this.state.nextHref) {
            url = this.state.nextHref;
        }

        qwest.get(url, null, {
            cache: true
        })
            .then(function (xhr, resp) {
                console.log(resp);
                if (resp) {
                    let tracks = self.state.tracks;
                    resp.results.map((track) => {
                        tracks.push(track);
                    });

                    if (resp.next) {
                        self.setState({
                            tracks: tracks,
                            nextHref: resp.next
                        });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                }
            });
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;

        let items = [];
        this.state.tracks.map((track, i) => {
            items.push(
                <PictureComponent src={track.image} title={track.title} id={track.url}/>
            );
        });
        return (
            <div>
                <GalleryNavbar/>
                <div className="free"/>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems.bind(this)}
                    hasMore={this.state.hasMoreItems}
                    loader={loader}>

                    <div className="tracks">
                        {items}
                    </div>
                </InfiniteScroll>
            </div>

        )
    }
}

export default Main