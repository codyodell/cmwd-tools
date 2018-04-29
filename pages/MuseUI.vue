<template>
  <div>
    <mu-content-block>
      <mu-paper class="demo-menu">
        <mu-menu desktop>
          <mu-menu-item title="Bold" afterText="⌘B"/>
          <mu-menu-item title="Italic" afterText="⌘I"/>
          <mu-menu-item title="Underline" afterText="⌘U"/>
          <mu-menu-item title="Strikethrough" afterText="Alt+Shift+5"/>
          <mu-menu-item title="Superscript" afterText="⌘."/>
          <mu-menu-item title="Subscript" afterText="⌘,"/>
          <mu-divider />
          <mu-menu-item title="Paragraph styles" rightIcon="keyboard_arrow_right"/>
          <mu-menu-item title="Align" rightIcon="keyboard_arrow_right"/>
          <mu-menu-item title="Line spacing" rightIcon="keyboard_arrow_right"/>
          <mu-menu-item title="Paragraph styles" rightIcon="keyboard_arrow_right"/>
          <mu-menu-item title="Numbered list" rightIcon="keyboard_arrow_right"/>
          <mu-menu-item title="List options" rightIcon="keyboard_arrow_right"/>
          <mu-divider />
          <mu-menu-item title="Clear formatting" afterText="⌘/"/>
        </mu-menu>
      </mu-paper>
      <mu-paper class="demo-menu">
        <mu-menu desktop :width="256">
          <mu-menu-item title="Open" afterText="Cmd + O" />
          <mu-menu-item title="Paste in place" afterText="Shift + V" />
          <mu-menu-item title="Research" afterText="Opt + Shift + Cmd + I" />
        </mu-menu>
      </mu-paper>
    </mu-content-block>
  </div>
</template>
<script>
export default {}
</script>
