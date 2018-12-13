import { Link } from 'react-router-dom';
import React, { Component } from 'react'

const ErrorMessage = (props) => {
    console.log(props.msg)
    return (
        <p className="error">{props.msg}</p>
    )
};

const SocialBlock = (props) => {
    console.log(props);
    return props.buildBlocks.map((value, index) => {
        // console.log(value);  
        if(value){
            return (
                <div className="relative float-left" key={index} >
                    <a href="#" className="social-delete-link" onClick={()=> {props.onDelete(value)} }>x</a>
                    
                    <Link to="/social" className={`float-left social-block ${'social-block-' + value.toLowerCase()}`}>
                        <span>{value}</span>
                    </Link>
                </div>
            )
        }
    });
}
class Social extends Component {
    socialState = {
        selectError: false,
        defaultLimit: 2,
        defaultSocialBlocks: [],
        selectedPlatform: 'null',
        // platforms: ['Facebook', 'Twitter', 'WhatsApp', 'GooglePlus', 'Discus'],
        populatePlatforms: []
    }
    constructor(props) {
        super(props);
        this.state = this.socialState;
        this.addSocial = this.addSocial.bind(this);
        this.platformNameChange = this.platformNameChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    componentDidMount() {
        console.log('Comp did mount method called');
        let populatePlatformsData = ["Vero", "Befilo", "Twoo", "Opportunity", "Zoimas", "Facebook", "Pinterest", "LinkedIn", "Google+", "Reddit", "Gab", "Mastodon", "Ello", " Woddal", "Hello", " MeWe", " Raftr", " OneWay ", " EyeEm", "Care2", "GirlsAskGuys", "Houseparty", "Gentlemint", "Canoodle", "Bucketlist", " Brainly ", "hi5", " Tiktok ", "NapSack", "DeviantArt", "Flickr", "My Muslim Friends Book", "BlackPlanet", " Steemit ", " Amino ", " InLinx ", "Mylife", "MeetVibe", "Spinchat", "Soup", "Diaspora", "Kiwibox", "Meetup", "Badoo", "Tagged", "VK", "Tumblr", "Hub Culture", "Vero", "Befilo", "Twoo", "Opportunity", "Zoimas", "Facebook", "Twitter", "Instagram", "Pinterest", "LinkedIn", "Google+", "Reddit", "Gab", "Mastodon", "Ello", "Woddal", "Hello", "MeWe", "Raftr", "OneWay", "EyeEm", "Care2", "GirlsAskGuys", "Houseparty", "Gentlemint", "Canoodle", "Bucketlist", "Brainly", "hi5", "Tiktok", "NapSack", "DeviantArt", "Flickr", "My Muslim Friends Book", "BlackPlanet", "Steemit", "Amino", "InLinx", "Mylife", "MeetVibe", "Spinchat", "Soup", "Diaspora", "Kiwibox", "Meetup"];

        populatePlatformsData = populatePlatformsData.map( item => item.trim() );

        this.updateBlocksState(populatePlatformsData, this.state.defaultLimit);
        
        console.log('this.props', this.state);
    }
    componentDidUpdate() {
    }
    onDelete(value){
        console.clear();
        let defaultBlocks = [...this.state.defaultSocialBlocks];
        let totalPlatforms = [...this.state.populatePlatforms];

        if(value) {
            defaultBlocks = defaultBlocks.filter( item => item !== value);
            totalPlatforms.push(value);
            totalPlatforms = totalPlatforms.sort();
            
            this.setState({defaultSocialBlocks: defaultBlocks, populatePlatforms: totalPlatforms});

            if(!defaultBlocks.length) {
                setTimeout( ()=> {
                    alert('You have delete all the social platforms!!!');
                }, 500)
            }
        }
    }

    updateBlocksState(platforms, limit){
        const populatePlatformsData = platforms.sort().filter((item, idx, thisarr) => thisarr.indexOf(item) === idx);
        const defaultSocialBlocks = populatePlatformsData.filter((item, i) => i < limit);
        this.setState({
            populatePlatforms: populatePlatformsData.filter((item, i) => i > limit),
            defaultSocialBlocks
        });
    }

    platformNameChange(event) {
        console.log(this.state.selectedPlatform);
        this.setState({ 
            selectedPlatform: event.target.value,
            selectError: event.target.value !== 'null' ? false : true
        });
    }
    addSocial(event) {
        // const target = event.target;
        console.clear();
        const selectedPlatform = this.state.selectedPlatform;
        if(selectedPlatform !== "null" && selectedPlatform !== undefined) {
            this.setState({selectError : false});

            const findAtIndex = this.state.populatePlatforms.findIndex( item => item === selectedPlatform);
            const foundItem = this.state.populatePlatforms.find( item => item === selectedPlatform);
            const defaultBlocks = foundItem !== undefined ? [...this.state.defaultSocialBlocks, foundItem] : this.state.defaultSocialBlocks;
            const totalPlatforms = [...this.state.populatePlatforms.filter( (values, i) => i !== findAtIndex)];
            this.setState({defaultSocialBlocks: defaultBlocks, populatePlatforms: totalPlatforms});

        } else {
            this.setState({selectError : true});
            console.error('Please select social platform to add.');
        }
    }
    render() {
        const platformOptions = () => {
            return this.state.populatePlatforms.sort().map((value, i) => {
                return (<option key={i} value={value}>{value}</option>);
            });
        };

        console.log(this.state);

        return (
            <div className="social-content">
                <h1>Social</h1>

                <div className="social-form-panel">
                    <select className="inline-block" name="platformName" value={this.state.selectedPlatform} onChange={this.platformNameChange}>
                        <option value="null">Select social platform</option>
                        {platformOptions()}
                    </select>
                    {/* {`${this.state.selectError }`} */}
                    {this.state.selectError ? (<ErrorMessage msg="Please select social platform to add." />) : ''}
                    <button className="inline-block" onClick={this.addSocial} disabled={this.state.selectError}>Add Social</button>
                </div>
                <div className="clearfix"></div>
                <SocialBlock buildBlocks={this.state.defaultSocialBlocks} onDelete={this.onDelete} />
                
            </div>
        )
    }
}

export default Social;