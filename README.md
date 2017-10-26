# sale-tag

[NPM Download](https://www.npmjs.com/package/sale-tag) [Github Download](https://github.com/jishiniao/sale-tag)

sale-tag is a react component for sale tag. it use pure css, re implement various sale of tag. At present, has one tag style, named `discount tag`

## Installation

Install sale-tag in your node project with npm or yarn:

```shell
$ npm install sale-tag
//or
$ yarn add sale-tag
```

## Usage

use es6 import module, and then use, like this:

```javascript
import Tag from 'sale-tag'
<Tag text={'9 折'} disable={Boolean} />
```

> Note:  
> Before use it, make sure html parent element has `position` css attribute, and it's value is relative.

## Parameters

| Name      | Type   | IsRequired | Description |
| --------- | ------ | ---------- | ----------- |
| disable | Boolean | no | default value is true. When it is false, sale-tag color is blue, otherwise gray. |
