// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jwv3sFTRCEhWt4X1hDRzar
// Component: qHn5u7leYl
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: jwv3sFTRCEhWt4X1hDRzar/projectcss
import * as sty from "./PlasmicProducts.module.css"; // plasmic-import: qHn5u7leYl/css

export type PlasmicProducts__VariantMembers = {};

export type PlasmicProducts__VariantsArgs = {};
type VariantPropType = keyof PlasmicProducts__VariantsArgs;
export const PlasmicProducts__VariantProps = new Array<VariantPropType>();

export type PlasmicProducts__ArgsType = {};
type ArgPropType = keyof PlasmicProducts__ArgsType;
export const PlasmicProducts__ArgProps = new Array<ArgPropType>();

export type PlasmicProducts__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultProductsProps {
  dataFetches: PlasmicProducts__Fetches;
}

function PlasmicProducts__RenderFunc(props: {
  variants: PlasmicProducts__VariantsArgs;
  args: PlasmicProducts__ArgsType;
  overrides: PlasmicProducts__OverridesType;
  dataFetches?: PlasmicProducts__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(defaultcss.all, sty.columns)}
          >
            <div className={classNames(defaultcss.all, sty.column__kKbJy)} />

            <div className={classNames(defaultcss.all, sty.column__fd4O8)}>
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text
                )}
              >
                {"Products\n"}
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.column___2HzUm)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "text"],
  columns: ["columns", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProducts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProducts__VariantsArgs;
    args?: PlasmicProducts__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicProducts__Fetches;
  } & Omit<PlasmicProducts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProducts__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProducts__ArgProps,
      internalVariantPropNames: PlasmicProducts__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicProducts__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProducts";
  } else {
    func.displayName = `PlasmicProducts.${nodeName}`;
  }
  return func;
}

export const PlasmicProducts = Object.assign(
  // Top-level PlasmicProducts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicProducts
    internalVariantProps: PlasmicProducts__VariantProps,
    internalArgProps: PlasmicProducts__ArgProps
  }
);

export default PlasmicProducts;
/* prettier-ignore-end */
