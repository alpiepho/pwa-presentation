import React from "react"
import { Link } from "gatsby"
import { css, useColorMode, Styled } from "theme-ui"
// import Switch from "./switch"
// import Bio from "../components/bio"
// import sun from "../../assets/sun.png"
// import moon from "../../assets/moon.png"
import Switch from "../../../node_modules/gatsby-theme-blog/src/components/switch"
// import Bio from "../../../node_modules/gatsby-theme-blog/src/components/bio"
import Bio from "./bio"
// import sun from "../../../node_modules/gatsby-theme-blog/assets/sun.png"
// import moon from "../../../node_modules/gatsby-theme-blog/assets/moon.png"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          fontSize: 5,
        })}
      >
        <Styled.a
          as={Link}
          css={{
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h3>
    )
  }
}

// const checkedIcon = (
//   <img
//     alt="moon indicating dark mode"
//     src={moon}
//     width="16"
//     height="16"
//     role="presentation"
//     css={{
//       pointerEvents: `none`,
//       margin: 4,
//     }}
//   />
// )

// const uncheckedIcon = (
//   <img
//     alt="sun indicating light mode"
//     src={sun}
//     width="16"
//     height="16"
//     role="presentation"
//     css={{
//       pointerEvents: `none`,
//       margin: 4,
//     }}
//   />
// )

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `baseline`,
            mb: 4,
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
          <div style={{opacity:0.1}}>
            <Switch
              aria-label="Toggle dark mode"
              aria-checked={ (isDark ? "true" : "false") }
              css={css({
                bg: `black`,
              })}
              // checkedIcon={checkedIcon}
              // uncheckedIcon={uncheckedIcon}
              checked={isDark}
              onChange={toggleColorMode}
            />
          </div>
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  )
}
