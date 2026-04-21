import remarkFrontmatter from 'remark-frontmatter';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkPresetLintConsistent from 'remark-preset-lint-consistent';
import remarkLintHeadingIncrement from 'remark-lint-heading-increment';
import remarkLintNoDuplicateHeadings from 'remark-lint-no-duplicate-headings';
import remarkLintNoEmptyUrl from 'remark-lint-no-empty-url';
import remarkLintNoMultipleToplevelHeadings from 'remark-lint-no-multiple-toplevel-headings';
import remarkLintFirstHeadingLevel from 'remark-lint-first-heading-level';
import remarkLintUnorderedListMarkerStyle from 'remark-lint-unordered-list-marker-style';
import remarkLintNoTrailingSpaces from 'remark-lint-no-trailing-spaces';
import remarkLintNoConsecutiveBlankLines from 'remark-lint-no-consecutive-blank-lines';
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length';

function remarkRequireFrontmatter() {
  return (tree, file) => {
    const rel = file.path ?? '';
    if (!/[\\/](docs|blog)[\\/]/.test(rel)) return;

    const frontmatterNode = tree.children[0];
    if (!frontmatterNode || frontmatterNode.type !== 'yaml') {
      file.message(
        'Missing frontmatter block',
        null,
        'remark-lint:require-frontmatter'
      );
      return;
    }
    const { value } = frontmatterNode;
    if (!/^title\s*:/m.test(value)) {
      file.message(
        'Frontmatter missing required field: title',
        null,
        'remark-lint:require-frontmatter'
      );
    }
    if (!/^description\s*:/m.test(value)) {
      file.message(
        'Frontmatter missing required field: description',
        null,
        'remark-lint:require-frontmatter'
      );
    }
  };
}

export default {
  plugins: [
    remarkPresetLintRecommended,
    remarkPresetLintConsistent,
    remarkFrontmatter,
    remarkRequireFrontmatter,
    remarkLintHeadingIncrement,
    remarkLintNoDuplicateHeadings,
    remarkLintNoEmptyUrl,
    remarkLintNoMultipleToplevelHeadings,
    [remarkLintFirstHeadingLevel, 2],
    [remarkLintUnorderedListMarkerStyle, '-'],
    remarkLintNoTrailingSpaces,
    remarkLintNoConsecutiveBlankLines,
    [remarkLintMaximumLineLength, { size: 80 }],
  ],
};
