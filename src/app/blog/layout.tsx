const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="content px-10">{children}</main>;
};

export default BlogLayout;
