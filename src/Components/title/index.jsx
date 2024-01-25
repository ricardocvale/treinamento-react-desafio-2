import { SubTitleStyled, TitleContainer, TitleStyled } from './styles'

export default function Title({ textTitle, subTitle }) {
    return (
        <TitleContainer>
            <TitleStyled data-testid="title-styled" >{textTitle}</TitleStyled>
            {subTitle && (
                <SubTitleStyled data-testid="subtitle-styled"  >{subTitle}</SubTitleStyled>
            )}
        </TitleContainer>
    )
}