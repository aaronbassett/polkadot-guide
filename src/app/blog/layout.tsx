const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="prose prose-2xl">{children}</main>;
};

export default BlogLayout;
