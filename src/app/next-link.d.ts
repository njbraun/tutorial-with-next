/**
 * Deno-compatible type declaration for Next.js Link component
 * 
 * This overrides Next.js's complex ForwardRefExoticComponent type definition
 * with a simpler ComponentType that Deno's TypeScript can understand,
 * while maintaining full compatibility with all Next.js Link props.
 */
declare module "next/link" {
  import { ComponentType, AnchorHTMLAttributes, ReactNode } from "react";
  import type { LinkProps as NextLinkProps } from "next/dist/client/link";
  
  type LinkProps = NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: ReactNode;
  };
  
  const Link: ComponentType<LinkProps>;
  export default Link;
  export * from "next/dist/client/link";
}
