import axios from "axios";
import { useEffect, useState } from "react";
import { Link, TextM, TitleL } from "../../../../styles/fonts";
import { GithubLinkContainer, NameUserAndGithubLinkContainer, ProfileCharacteristic, ProfileCharacteristicIcon, ProfileCharacteristics, ProfileContainer, ProfileImageContainer, ProfileInfoContainer, ProfileNameAndBioContainer } from "./styles";
import arrowSquare from "../../../../assets/arrow-square.svg";

import githubIcon from "../../../../assets/github.svg";
import companyIcon from "../../../../assets/company.svg";
import peopleIcon from "../../../../assets/people.svg";

export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email?: any;
    hireable?: any;
    bio: string;
    twitter_username?: any;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}

export function Profile() {
    const [user, setUser] = useState({} as User)

    useEffect(() => {
        axios.get("https://api.github.com/users/PedroHenriqueFernandes")
            .then(response => {
                setUser(response.data)
            })
    }, [])

    return (
        <ProfileContainer>
            <ProfileImageContainer src={user.avatar_url} />
            <ProfileInfoContainer>
                <ProfileNameAndBioContainer>
                    <NameUserAndGithubLinkContainer>
                        <TitleL>
                            {user.name}
                        </TitleL>
                        <GithubLinkContainer>
                            <Link>
                                GITHUB
                            </Link>
                            <img src={arrowSquare} alt="" />
                        </GithubLinkContainer>
                    </NameUserAndGithubLinkContainer>
                    <TextM>
                        {user.bio}
                    </TextM>
                </ProfileNameAndBioContainer>
                <ProfileCharacteristics>
                    <ProfileCharacteristic>
                        <ProfileCharacteristicIcon src={githubIcon} />
                        <TextM>
                            {user.login}
                        </TextM>
                    </ProfileCharacteristic>

                    <ProfileCharacteristic>
                        <ProfileCharacteristicIcon src={companyIcon} />
                        <TextM>
                            {user.company}
                        </TextM>
                    </ProfileCharacteristic>

                    <ProfileCharacteristic>
                        <ProfileCharacteristicIcon src={peopleIcon} />
                        <TextM>
                            {user.followers}
                        </TextM>
                    </ProfileCharacteristic>
                </ProfileCharacteristics>
            </ProfileInfoContainer>
        </ProfileContainer>
    )
}