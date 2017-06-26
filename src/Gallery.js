import React from 'react'
import PictureComponent from '../src/PictureComponent'
import GalleryNavbar from '../src/GalleryNavbar'
import InfiniteScroll from '../node_modules/react-infinite-scroller/dist/InfiniteScroll'
import * as axios from "axios";
import qwest from 'qwest'
import MainNavbar from "./MainNavbar";

const imageList = [];
const api = {
    baseUrl: 'https://api.soundcloud.com',
    client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

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
        var self = this;

        var url = api.baseUrl + '/users/8665091/favorites';
        if (this.state.nextHref) {
            url = this.state.nextHref;
        }

        qwest.get(url, {
            client_id: api.client_id,
            linked_partitioning: 1,
            page_size: 10
        }, {
            cache: true
        })
            .then(function (xhr, resp) {
                console.log(resp);
                if (resp) {
                    var tracks = self.state.tracks;
                    resp.collection.map((track) => {
                        if (track.artwork_url === null) {
                            track.artwork_url = track.user.avatar_url;
                        }
                        tracks.push(track);
                    });

                    if (resp.next_href) {
                        self.setState({
                            tracks: tracks,
                            nextHref: resp.next_href
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

        var items = [];
        this.state.tracks.map((track, i) => {
            items.push(
                <PictureComponent src={track.artwork_url} title={track.title}/>
            );
        });
        return (
            <div>
                <GalleryNavbar/>
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