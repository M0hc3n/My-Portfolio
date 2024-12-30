import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ color: "white", fontSize: "1.7rem", lineHeight: '1.3', marginBottom: "0.5em" }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ color: "white" }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ color: "white" }}>{children}</h3>,
    h4: ({ children }) => <h4 style={{ color: "white" }}>{children}</h4>,
    h5: ({ children }) => <h5 style={{ color: "white" }}>{children}</h5>,
    h6: ({ children }) => <h6 style={{ color: "white" }}>{children}</h6>,
    p: ({ children }) => <p style={{ color: "white", fontSize: "1.3rem", lineHeight: '1.5', marginTop: '0.5em', marginBottom: "0.5em" }}>{children}</p>,
    li: ({ children }) => <li style={{ color: "white", fontSize: "1.3rem", lineHeight: '1.5' }}>{children}</li>,
    ul: ({ children }) => <ul style={{ color: "white", fontSize: "1.3rem", lineHeight: '1.5' }}>{children}</ul>,
    span: ({ children }) => <span style={{ color: "white" }}>{children}</span>,
    // strong: ({ children }) => <strong style={{ color: "white" }}>{children}</strong>,
    // em: ({ children }) => <em style={{ color: "white" }}>{children}</em>,
    ...components,
  };
}
