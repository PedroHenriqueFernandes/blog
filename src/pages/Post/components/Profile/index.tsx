import { Link, TextM, TitleL } from '../../../../styles/fonts'
import {
  GithubLinkContainer,
  PostSummaryContainer,
  ProfileCharacteristic,
  ProfileCharacteristicIcon,
  ProfileCharacteristics,
  ProfileContainer,
  ProfileInfoContainer,
  TitleIssue,
} from './styles'
import arrowSquare from '../../../../assets/arrow-square.svg'

import githubIcon from '../../../../assets/github.svg'
import calendar from '../../../../assets/calendar.svg'
import comment from '../../../../assets/comment.svg'
import returnIcon from '../../../../assets/return.svg'

import { Post } from '../../../../context/PostsContext'
import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface ProfileProps {
  issue: Post
}

export function Profile({ issue }: ProfileProps) {
  return (
    <ProfileContainer>
      {issue && (
        <ProfileInfoContainer>
          <PostSummaryContainer>
            <nav>
              <GithubLinkContainer href="/">
                <img src={returnIcon} alt="" />
                <Link>VOLTAR</Link>
              </GithubLinkContainer>
              <GithubLinkContainer href={issue.url}>
                <Link>VER NO GITHUB</Link>
                <img src={arrowSquare} alt="" />
              </GithubLinkContainer>
            </nav>
            <TitleIssue>
              <TitleL>{issue.title}</TitleL>
            </TitleIssue>
          </PostSummaryContainer>
          <ProfileCharacteristics>
            <ProfileCharacteristic>
              <ProfileCharacteristicIcon src={githubIcon} />
              <TextM>{issue.user.login}</TextM>
            </ProfileCharacteristic>

            <ProfileCharacteristic>
              <ProfileCharacteristicIcon src={calendar} />
              <TextM>
                Há{' '}
                {formatDistance(new Date(issue.created_at), new Date(), {
                  locale: ptBR,
                })}
              </TextM>
            </ProfileCharacteristic>

            <ProfileCharacteristic>
              <ProfileCharacteristicIcon src={comment} />
              <TextM>
                {issue.comments === 1
                  ? `${issue.comments} comentário`
                  : `${issue.comments} comentários`}
              </TextM>
            </ProfileCharacteristic>
          </ProfileCharacteristics>
        </ProfileInfoContainer>
      )}
    </ProfileContainer>
  )
}
