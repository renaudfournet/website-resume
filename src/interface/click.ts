interface IClick {
  message: string
  onClick(event: React.MouseEvent<HTMLElement>): void
}

export default IClick
