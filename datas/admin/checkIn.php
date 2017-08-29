<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>嘉宝管理员入口</title>
    <script src="../js/data.js"></script>
    <style>
        html{ font-size: }
        body{ padding:0; margin:0; backgrond:#ccc;}
        h2 {
            text-align: center;
            font-size:
        }
    </style>
</head>
<body>
    <h2>嘉宝管理后台系统</h2>
    <form action="adminlogin.php" method="POST">
        <p>
            <span>帐号</span>
            <input type="text" name="phone"/>
        </p>
        <p>
            <span>密码</span>
            <input type="password" name="password"/>
        </p>
        <p>
            <input type="submit" name="submit" value="登录"/>
        </p>
    </form>
</body>
</html>