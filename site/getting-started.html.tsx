import { Page } from "./page.js";
import mdfiles from './md/';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  typographer: true,
  html: true,
  linkify: true,
  breaks: true
});

const markdown = mdfiles[0]!.content.toString('utf8');


export default <Page which="Getting Started">
  <link rel='stylesheet' href='style.css' />
  <h3>Using imlib</h3>
  <p>Clone the <a href='https://github.com/sdegutis/imlib-template-minimal'>template repo</a>.</p>
  {md.render(markdown)}
</Page>;
