(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c9e5f9d"],{a0d3:function(e,n,i){"use strict";i.r(n);var o=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:"column "+(e.half?"is-half":"is-full")+" is-full-mobile is-full-tablet",on:{copied:e.copied}},[i("h3",{domProps:{innerHTML:e._s(e.name)}}),i("pre",[i("code",{staticClass:"language-docker",domProps:{innerHTML:e._s(e.conf)}})])])},s=[],l=i("c197"),t=i.n(l),r=(i("d9eb"),{name:"DockerPrism",props:{name:String,conf:String,half:Boolean},mounted(){console.info(`Highlighting ${this.$props.name}...`),t.a.highlightAllUnder(this.$el)},methods:{copied(e){this.$emit("copied",e.detail.text)}}}),a=r,c=i("2877"),d=Object(c["a"])(a,o,s,!1,null,null,null);n["default"]=d.exports},d9eb:function(e,n){Prism.languages.docker={keyword:{pattern:/(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,lookbehind:!0},string:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,comment:{pattern:/#.*/,greedy:!0},punctuation:/---|\.\.\.|[:[\]{}\-,|>?]/},Prism.languages.dockerfile=Prism.languages.docker}}]);