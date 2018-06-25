import { injectGlobal } from "styled-components";
import reset from "styled-reset";

injectGlobal`
${reset};

*{
    box-sizing:border-box;
}
html,
body,
#root{
    height:100%;
}
body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto;
    color:black;
    padding-left:85px;
    padding-right:85px;
    background-color:#F6E9D6;
}
a{
    text-decoration:none;
    color:inherit;
    &:hover {
        text-decoration:underline;
        
    }
}
`;
